import { FormComponentProps } from "antd/lib/form";
import { PersonaldataDoMainStore } from "../domainStore";

export interface IMiddleFromViewProps extends FormComponentProps {
    GlobalPersonaldataDoMainStore:PersonaldataDoMainStore;
}