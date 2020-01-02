import { keyframes } from 'styled-components';

export const MoveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(6rem); }
  100% {
    opacity: 1;
    transform: translate(0); } 
`

export const MoveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem); }
  80% {
    transform: translateX(3rem); }
  100% {
    opacity: 1;
    transform: translate(0); } 
`

export const MoveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem); }
  80% {
    transform: translateX(-3rem); }
  100% {
    opacity: 1;
    transform: translate(0); } 
`