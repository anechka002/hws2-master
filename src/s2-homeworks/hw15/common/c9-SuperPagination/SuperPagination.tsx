import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage); // пишет студент // вычислить количество страниц
    console.log('lastPage', lastPage)

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        onChange(page, event.target.value)
        console.log('Новая страница:', page)
    }

    const onChangeSelect = (event: any) => {
        // пишет студент
        const newItemsCountForPage = +event.target.value
        onChange(page, newItemsCountForPage)
        console.log('selectedValue', newItemsCountForPage)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                    margin: '20px 0', 
                    '& .MuiPaginationItem-root': {
                        backgroundColor: 'none',
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#1976d2', 
                        color: '#fff',
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
