//유저 모델의 인터페이스 값
//?는 옵셔널 처리
//User column
export interface UserAttributes{
    //idx는 자동주입
    idx?: number
    email : string
    //카카오, 네이버 유저는 null값임
    password?: string
    name: string
    provider: Provider
    //로컬 유저는 null
    providerId?: string
}

export enum Provider{
    LOCAL,
    KAKAO,
    NAVER,
}