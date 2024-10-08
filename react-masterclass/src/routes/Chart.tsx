import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinID: string;
}

const Chart = () => {
    const { coinID } = useOutletContext<ChartProps>();
    const { isLoading, data } = useQuery<IHistorical[]>({
        queryKey: ["ohlcv", coinID],
        queryFn: () => fetchCoinHistory(`${coinID}`),
    });
    return (
        <div>
            {isLoading ? (
                "Loading chart...."
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "hello",
                            data: [1, 2, 3, 4, 5],
                        },
                        {
                            name: "sales",
                            data: [12, 22, 32, 42, 52],
                        },
                    ]}
                    options={{
                        chart: {
                            width: 500,
                            height: 500,
                        },
                    }}
                />
            )}
        </div>
    );
};

export default Chart;
