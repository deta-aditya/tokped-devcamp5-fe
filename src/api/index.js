import axios from 'axios'
import { api } from '@/config'

const request = (method, uri, data = {}) => {
  return axios[method](`${api}${uri}`, data)
    .then(result => result.data)
}

const getStoreById = (id) =>
  request('get', `/store/${id}`,)

const getStoreTransactions = (id) => 
  request('get', `/store/${id}/trx`)

const updateOrderStatus = (id, status) =>
  request('put', `/store/${id}/status`, { status })

const cancelOrder = (id, notes, actor) =>
  request('put', `/order/${id}/cancel`, { 
    notes, 
    canceled_by: actor, // 1 penjual, 2 pembeli
  })

const getTransactionDetails = (id) =>
  request('get', `/trx/${id}`)

const getStoreProducts = (id) =>
  request('get', `/store/${id}/product`)

export {
  getStoreById,
  getStoreTransactions,
  updateOrderStatus,
  cancelOrder,
  getTransactionDetails,
  getStoreProducts,
}