export type Gender = "male" | "female" | "non-binary" | "other";

type User = {
  id: number;
  name: string;
  gender: Gender;
};

export type SleepRecord = {
  name: User["name"];
  gender: User["gender"];
  duration: number | string;
  recordDate?: string;
};

export type UserSleepRecord = {
  id: number;
  name: string;
  gender: string;
  sleepRecords: number;
};
