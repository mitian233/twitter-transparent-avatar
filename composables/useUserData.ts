import type {Ref} from 'vue'

const useUserData = (data?: any) => {
    return useState('twitterUserData', (data ? () => data : undefined))
}

export default useUserData
