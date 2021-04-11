export interface Hospital{
    state?: string;
    lga?: string;
    ward?: string;
    facilityUid?: number;
    facilityCode?: string;
    facilityName?: string;
    facilityLevel?: string;
    ownership?: string;
    longitude?: number | null;
    latitude?: number | null;
    phoneNumber?: string;
    email?: string;
}