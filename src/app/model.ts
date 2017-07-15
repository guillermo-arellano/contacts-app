
export class Contact {
    name: string;
    id: number;
    companyName: string;
    isFavorite: boolean;
    smallImageURL: string;
    largeImageURL: string;
    emailAddress: string;
    birthdate: string;
    phone: Phone;
    address: Address;
}

export class Phone {
    work: string;
    home: string;
    mobile: string;
}

export class Address {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
}