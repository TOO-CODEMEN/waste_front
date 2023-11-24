import { CircularProgress } from '@mui/material'
import React from 'react'
import { dataNames } from '../data/data'
import photo from '../assets/img/photo.png'
import s from './styles.module.scss'

export const Result = ({isError, isFetching, data, image}) => {
	return (
		<div style={{marginTop: 20}}>
			{isError ? (
				<div>Ошибка</div>
			) : isFetching ? (
				<CircularProgress />
			) : data ? (
				<div>
                    <div className={s.title}> 
                        Ответ сервера: 
                    </div>
                    <div className={s.result}>
                        С точностью <span>{Math.round(data.predictions[0]?.confidence * 100)}%</span> это - <span>{dataNames[data.predictions[0]?.class]}</span>
                    </div>
                    <img src={image ? image : photo} />
                </div>
			) : (
				<div><img src={image ? image : photo} /></div>
			)}
		</div>
	)
}
