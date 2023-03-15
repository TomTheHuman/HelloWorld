import { atom, selector } from 'recoil';

/**
 * Note object typing
 */
export interface INote {
  value: string
  color: string
  created: string
  modified: string
}

/**
 * Notes list state
 */
export const notesState = atom<INote[]>({
  key: 'Notes',
  default: []
});

/**
 * Notes count selector
 */
export const notesCountState = selector({
  key: 'NotesCount',
  get: ({ get }) => {
    const notes = get(notesState);
    return notes.length;
  }
});
