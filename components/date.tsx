import { cacheLife } from 'next/cache'

export default async function getCurrentYear () {
    'use cache'
    cacheLife('max')
    return new Date().getFullYear()
}

