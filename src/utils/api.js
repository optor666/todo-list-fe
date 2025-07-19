import { showErrorToast } from './toast'
import { loadingStore } from './loading'

export async function apiFetch(method, url, query=undefined, body=undefined, headers=undefined) {
    loadingStore.start()
    try {
        let fullUrl = url
        if (!query) {
            query = {
                delay: Math.floor(Math.random() * 1000) + 1
            }
        }
        if (query && typeof query === 'object') {
            const queryStr = new URLSearchParams(query).toString()
            fullUrl += '?' + queryStr
        }
        const response = await fetch(fullUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...(headers || {})
            },
            body: body ? JSON.stringify(body) : undefined
        })

        const json = await response.json().catch(() => null)
        if (!json || typeof json.success !== 'boolean') {
            showErrorToast('服务器响应异常')
            return { error: '响应格式错误' }
        }

        if (!json.success) {
            showErrorToast(json.message || '请求失败')
            return { error: json.message || '请求失败' }
        }

        return json.data
    } catch (error) {
        console.error('网络异常', error)
        showErrorToast('网络异常，请检查网络连接')
        return { error: '网络异常' }
    } finally {
        loadingStore.end()
    }
}
