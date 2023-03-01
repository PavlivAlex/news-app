import moment from "moment";

export const convertTime = (data: string) => moment(data).format("L");
