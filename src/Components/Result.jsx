import { CircularProgress } from '@mui/material'
import React from 'react'
import { dataNames } from '../data/data'
import s from './styles.module.scss'

export const Result = ({ isError, isFetching, data, fileURL, fileBlob }) => {
	const concrete = []
	const brick = []
	const priming = []
	const tree = []
	const arrays = [concrete, brick, priming, tree]
	let longest = arrays[0]
	let maxPrediction = data && data.predictions[0]
	if (data && fileBlob.type.includes('video')) {
		data['waste-detect-rb23i'].forEach((frame) => {
			frame.predictions.forEach((prediction) => {
				switch (prediction.class) {
					case 'concrete':
						concrete.push(prediction)
						break
					case 'brick':
						brick.push(prediction)
						break
					case 'priming':
						priming.push(prediction)
						break
					case 'tree':
						tree.push(prediction)
						break
					default:
						break
				}
			})
		})
		for (let i = 1; i < arrays.length; i++) {
			if (arrays[i].length > longest.length) {
				longest = arrays[i]
			}
		}
		maxPrediction = longest.reduce(
			(max, prediction) =>
				prediction.confidence > max.confidence ? prediction : max,
			longest[0]
		)
	}

	return (
		<div
			style={{
				marginTop: 20,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{isError ? (
				<div>Ошибка</div>
			) : isFetching ? (
				<CircularProgress />
			) : data ? (
				<div>
					<div className={s.title}>Ответ сервера:</div>
					<div className={s.result}>
						С точностью{' '}
						{(maxPrediction.confidence * 100).toFixed(2)}% это -{' '}
						{dataNames[maxPrediction.class]}
					</div>
				</div>
			) : null}
			{fileURL && (
				<>
					{fileBlob.type.includes('image') ? (
						<img
							src={fileURL}
							alt='Selected'
							style={{ maxWidth: '60%', textAlign: 'center' }}
						/>
					) : (
						<video controls style={{ maxWidth: '60%' }}>
							<source src={fileURL} type={fileBlob.type} />
							Your browser does not support the video tag.
						</video>
					)}
				</>
			)}
		</div>
	)
}
