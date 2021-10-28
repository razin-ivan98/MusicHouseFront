import * as React from "react"
import { ColorVariant } from "../consts"
import { observer } from "mobx-react"
import { CLProgressBar } from "../CLProgressBar/CLProgressBar"
import { CLButton } from "../CLButton/CLButton"
import { action, computed, observable } from "mobx"
import { autobind } from "core-decorators"
import { CLFlex } from "../CLFlex/CLFlex"
import { CLText } from "../CLText/CLText"
import { formatTime } from "../utils"

export type BorderTypes = "circle" | "square"

interface Props {
    src: string
    variant?: ColorVariant
}

@observer
@autobind
export class CLAudio extends React.Component<Props> {
    @observable
    private isPlayed: boolean = false

    @action
    private switchIsPlayed() {
        this.isPlayed = !this.isPlayed
    }

    @observable
    private currentTime: number = 0

    @observable
    private duration: number = 0

    @action
    private updateCurrentTime() {
        this.currentTime = this.audioRef.current.currentTime
    }

    @action
    private updateDuration() {
        this.duration = this.audioRef.current.duration
    }

    private audioRef = React.createRef<HTMLAudioElement>()

    private clickHandle() {
        this.switchIsPlayed()
        if (this.isPlayed) {
            this.audioRef.current.play()
        } else {
            this.audioRef.current.pause()
        }
    }

    private loadedHandle() {
        this.updateCurrentTime()
        this.updateDuration()
    }

    private seekHandle(time: number) {
        this.audioRef.current.fastSeek(time)
    }

    @computed
    private get renderCurrentTime() {
        return formatTime(this.currentTime)
    }

    @computed
    private get renderDuration() {
        return formatTime(this.duration)
    }

    render() {
        return <React.Fragment>
            <CLFlex alignItems="center">
                <CLButton
                    size="small"
                    iconLeft={this.isPlayed ? "pause" : "play"}
                    onClick={this.clickHandle}
                    variant={this.props.variant}
                />
                <CLText>{this.renderCurrentTime}</CLText>
                <CLProgressBar
                    min={0}
                    max={this.duration}
                    value={this.currentTime}
                    colorVariant={this.props.variant}
                    withMarker
                    onChange={this.seekHandle}
                />
                <CLText>{this.renderDuration}</CLText>
            </CLFlex>
            <audio
                onLoadedData={this.loadedHandle}
                onTimeUpdate={this.updateCurrentTime}
                onEnded={this.switchIsPlayed}
                style={{display: "none"}}
                ref={this.audioRef}
                src={this.props.src}
                controls
            />
        </React.Fragment>
    }
}
