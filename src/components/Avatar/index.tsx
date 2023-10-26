import * as S from './style';

interface ILogoProps {
  color?: string;
}

export function Avatar({ color = '#712fff' }: ILogoProps) {
  return (
    <S.Wrapper>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='26.396'
        height='28.5'
        viewBox='0 0 26.396 28.5'
      >
        <g id='user' transform='translate(-0.5 1.014)'>
          <path
            id='Caminho_8'
            data-name='Caminho 8'
            d='M13.7,22.579c7.294,0,13.2-.847,13.2-3.876s-5.9-7.113-13.2-7.113S.5,15.674.5,18.7,6.4,22.579,13.7,22.579Z'
            transform='translate(0 4.906)'
            fill={color}
          />
          <circle
            id='Elipse_1'
            data-name='Elipse 1'
            cx='6.863'
            cy='6.863'
            r='6.863'
            transform='translate(4.731 11.667) rotate(-67.5)'
            fill={color}
          />
        </g>
      </svg>
    </S.Wrapper>
  );
}
