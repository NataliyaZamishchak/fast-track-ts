enum PackageStatus {
    Pending,
    InTransit,
    Delivered,
    Lost
}

interface Dimensions {
    length: number;
    width: number;
    height: number;
}

interface Parcel {
    readonly id: number;
    weight: number;
    dimensions: Dimensions;
    description?: string;
    sender: number | string;
    status: PackageStatus;
    deliver(isSuccess: boolean): void;
    readonly statusName: string;
}

const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: 'Vlad Tymo',
    description: 'Super power inside.',
    status: PackageStatus.Pending,
    deliver(isSuccess: boolean) {
        this.status = isSuccess ? PackageStatus.Delivered : PackageStatus.Lost;
    },
    get statusName() {
        return PackageStatus[this.status];
    }
};

item.deliver(true);
console.log(item.statusName); // Delivered

item.deliver(false);
console.log(item.statusName); // Lost

console.log('Parcel dimensions: ' + item.dimensions.height + 'x' + item.dimensions.length + 'x' + item.dimensions.width);
