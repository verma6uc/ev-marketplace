
export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  trim: string;
  price: number;
  mileage: number;
  batteryHealth: number;
  range: number;
  images: string[];
  location: string;
  sellerType: 'private' | 'dealer';
  sellerId: string;
  features: string[];
  description: string;
  createdAt: Date;
}

export interface BatteryHealthCertification {
  vehicleId: string;
  score: number;
  originalCapacity: number;
  currentCapacity: number;
  chargeRate: number;
  dischargeRate: number;
  thermalPerformance: number;
  cycleCount: number;
  certifiedBy: string;
  certificationDate: Date;
  expirationDate: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'buyer' | 'seller' | 'admin';
  avatar?: string;
  location?: string;
  createdAt: Date;
}
