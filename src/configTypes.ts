export type AwairPlatformConfig = {
  platform: string;
  token: string;
  userType: string;
  airQualityMethod: string;
  endpoint: string;
  polling_interval: number;
  limit: number;
  logging: boolean;
  verbose: boolean;
  carbonDioxideThreshold: number;
  carbonDioxideThresholdOff: number;
  vocMw: number;
  ignoredDevices: [string];
};

export type DeviceConfig = {
  name: string;
  macAddress: string;
  latitude: number;
  preference: string;
  timezone: string;
  roomType: string;
  deviceType: string;
  longitude: number;
  spaceType: string;
  deviceUUID: string;
  deviceId: number;
  locationName: string;
};

export type UserInfoConfig = {
  userTier: string;
  fifteenMin: number;
	fiveMin: number;
	raw: number;
	latest: number;
	getPowerStatus: number;
	getTimeZone: number;
};
