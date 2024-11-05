import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: number;
    time_close: number;
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
interface ICoinProps {
    isDark: boolean;
}
const Chart = ({ isDark }: ICoinProps) => {
    const { coinID } = useOutletContext<ChartProps>();
    const { isLoading, data } = useQuery<IHistorical[]>({
        queryKey: ["ohlcv", coinID],
        queryFn: () => fetchCoinHistory(`${coinID}`),
        //refetch /query 를 5000 마다 refetch하는 거
        // refetchInterval: 5000,
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
                            name: "Price",
                            data: data?.map((price) => price.close) as number[],
                        },
                        {
                            name: "Sales",
                            data: [12, 22, 32, 42, 52],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: isDark ? "dark" : "light",
                        },
                        chart: {
                            width: 500,
                            height: 300,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: {
                            show: false,
                        },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            labels: { show: false },
                            type: "datetime",
                            categories: data?.map((price) => new Date(price.time_close * 1000).toUTCString()),
                        },
                        fill: {
                            type: "gradient",
                            gradient: { gradientToColors: ["blue"], stops: [0, 100] },
                        },
                        colors: ["red"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(3)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
};

export default Chart;
