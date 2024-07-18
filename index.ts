import axios from "axios";
import { DepthManager } from "./DepthManager";

const solInrMarket = new DepthManager("B-XAI_INR");

const usdtInrMarket = new DepthManager("B-USDT_INR");

const solUsdtMarket = new DepthManager("B-XAI_USDT");


setInterval(() => {
    console.log(solInrMarket.getRelevantDepth())
    console.log(usdtInrMarket.getRelevantDepth())
    console.log(solUsdtMarket.getRelevantDepth()) },5000)