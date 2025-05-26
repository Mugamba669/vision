import { CurrentPrediction } from "./types";

export async function getNotifications(): Promise<CurrentPrediction> {

      const response = await fetch('http://127.0.0.1:5000/predict')
      const data = await response.json()
      return data;
}