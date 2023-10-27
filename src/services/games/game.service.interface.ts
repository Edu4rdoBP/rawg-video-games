import {
  IDLCsInput,
  IGameDetails,
  IGameInfo,
  IGameInput,
} from '@/@types/Games';
import { IGeneralInfo } from './raw.type';

interface IGameService {
  fetchGameById(id: number): Promise<IGameDetails>;
  fetchGames(input: IGameInput): Promise<IGameInfo[]>;
  fetchDLCs(input: IDLCsInput): Promise<IGameInfo[]>;
}

export default IGameService;
