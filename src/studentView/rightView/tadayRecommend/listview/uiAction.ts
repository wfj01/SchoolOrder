import { ITadayRecommendProps } from "./interface";

export class TadayRecommendUiAction {

    private props: ITadayRecommendProps;

    constructor(props: ITadayRecommendProps) {
        this.props = props;
        this.NextClick = this.NextClick.bind(this);
        this.LastClick = this.LastClick.bind(this);
    }

    public NextClick(){
        this.props.GlobalTadayRecommendDomainStore!.NextClick();
    }

    public LastClick(){
        this.props.GlobalTadayRecommendDomainStore!.LastClcik();
    }
}