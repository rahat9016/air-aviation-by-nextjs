export type HeroDataType = {
    title: string,
    subTitle: string,
    btnUrl: string,
    bannerImage: string,
}[]
export type PricingDataType = {
    qualityImg: string,
    title: string,
    serviceType: string,
    moneyIcon: string,
    weight: string,
    isTopRank: boolean,
    pointOfService: { point: string }[],
}[]
export type IndustriesDataType = {
    icon: string,
    title: string,
    desc: string,
    industriesPoints: { point: string }[]
}[]
export type ChooseUsDataType = {
    icon: string,
    title: string,
    ChooseUsPoints: { point: string }[]
}[]
export type ServiceDataType = {
    title: string,
    desc?: string,
    serviceImg: string,
    servicePoints: { point: string }[]
}[]
export type ServiceCardDataType = {
    title: string,
    desc?: string,
    serviceImg: string,
    servicePoints: { point: string }[],
}
export type MoreExtraServiceDataType = {
    title: string,
    desc: string,
    serviceImg: string,
    servicePoints: { point: string }[]
}[]
export type PriceChargeList = {
    icon: string,
    title: string,
    subTitle?: string,
    maxTk?: number,
    minTk?: number
}[]
export type TransportServiceData = {
    img: string,
    title: string,
    desc: string,
    link?: string
}[]
export type RentalServiceData = {
    img: string,
    title: string,
    desc: string,
    RM: number
}[]
export type ChooseUsType = {
    icon: string,
    title: string
}[]
export type FAQType = {
    id: number,
    title: string,
    desc: string
}[]
export type DeliveryChargeType = {
    img: string,
    title: string,
    desc: string
    icon: string,
    deliveryPoints: { point: string }[]
}[]
export type MessageType = {
    name: string,
    phone: string,
    email?: string,
    comment?: string,
    text?: string,
    website?: string
}
interface ILotType {
    date: string,
    history: IHistoryType[],
    location_status: string,
    reference: string,
    sl_no: number
}
interface IHistoryType {
    id: number,
    location_status: string,
    location_status_position: number,
    created_at: string
}
export interface ITrackingDataType {
    reference: string;
    booking_date: string;
    from: string;
    receiver_phone: string;
    total_lot: number;
    lot_list: ILotType[];
    payment_status: string;
    sender_phone: string;
    sl_no: number;
    status: string;
    to: string;
}