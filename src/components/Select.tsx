import React, { useState } from 'react'
import { RadioData } from './RadioData'

type SelectProps = {
  isPlaying: boolean
  currentNumber: number
  radioData: RadioData[]
  episodes: JSX.Element[]
  onChangeRadioId: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onChangeEpisode: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

/**
 * ラジオの選択肢要素を作成
 *
 * @param radioData ラジオデータ
 * @param isNowOnAir 放送中かどうか
 * @returns ラジオの選択肢要素
 */
function createRadioOptions(
  radioData: RadioData[],
  isNowOnAir: boolean
): JSX.Element[] {
  return radioData
    .filter((e) => (isNowOnAir ? e.latest === 0 : e.latest !== 0))
    .map((e) => {
      return (
        <option key={e.id} value={e.id}>
          {e.name}
        </option>
      )
    })
}

const Select = (props: SelectProps): JSX.Element => {
  const [nowOnAirRadios] = useState(createRadioOptions(props.radioData, true))
  const [noLongerOnAirRadios] = useState(
    createRadioOptions(props.radioData, false)
  )

  return (
    <div className="select drag-area">
      <select disabled={props.isPlaying} onChange={props.onChangeRadioId}>
        <optgroup label="放送中">{nowOnAirRadios}</optgroup>
        <optgroup label="放送終了">{noLongerOnAirRadios}</optgroup>
      </select>
      <select
        disabled={props.isPlaying}
        value={props.currentNumber}
        onChange={props.onChangeEpisode}
      >
        {props.episodes}
      </select>
    </div>
  )
}

export default React.memo(Select)
