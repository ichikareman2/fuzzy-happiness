export type Color = 'blue' | 'gray' | 'red' | 'yellow' | 'green' | 'white' | 'black' | '';
export const PrimaryColor = 'blue',
  GrayColor = 'gray',
  DangerColor = 'red',
  WarningColor = 'yellow',
  SuccessColor = 'green',
  WhiteColor = 'white',
  BlackColor = 'black',
  NoneColor = '';


export enum Mode {
  Primary = 'blue',
  Gray = 'gray',
  Danger = 'red',
  Warning = 'yellow',
  White = 'white',
  Black = 'black',
  None = ''
}

export const ModeTextColorClass = {
  [Mode.Primary]: 'text-white',
  [Mode.Gray]: 'text-black',
  [Mode.Danger]: 'text-white',
  [Mode.Warning]: 'text-white',
  [Mode.White]: 'text-black',
  [Mode.Black]: 'text-white',
  [Mode.None]: 'text-black'
}
