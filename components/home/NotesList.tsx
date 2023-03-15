import React, { useState } from 'react';

import { Pressable, StyleSheet } from 'react-native';
import { Times, Trash } from 'react-native-unicons';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { notesState } from '../../state/Notes';

import { Text, View } from '../Themed';

function NoteCard (props: any): JSX.Element {
  const { index, note, isActive, onSelect, onClose, onDelete } = props;
  const { value, color } = note;

  const renderFooter = (): JSX.Element => (
    <View style={styles.cardFooter}>
      <Pressable
        style={styles.footerButton}
        onPress={() => onDelete(index)}
      >
        <Trash color="rgba(0, 0, 0, 0.6)" />
      </Pressable>
      <Pressable
        style={styles.footerButton}
        onPress={() => onClose(index)}
      >
        <Times color="rgba(0, 0, 0, 0.6)" />
      </Pressable>
    </View>
  );

  return (
    <Pressable
      style={[
        { backgroundColor: color },
        styles.noteCard
      ]}
      onPress={() => onSelect(index)}
    >
      <Text style={styles.noteText}>
        {value}
      </Text>
      {isActive && renderFooter()}
    </Pressable>
  );
}

export default function NotesList (props: any): JSX.Element {
  const notes = useRecoilValue(notesState);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const setNotes = useSetRecoilState(notesState);

  const deleteNote = (indexToDelete: number): void => {
    console.log(notes);
    console.log(indexToDelete);
    setNotes((prevNotes) => prevNotes.filter((note) => )});
  };

  const setInactive = (): void => {
    setActiveIndex(null);
  };

  const setActive = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {notes.map((note, index) => (
        <NoteCard
          key={`note-card-${index}`}
          index={index}
          isActive={activeIndex === index}
          onSelect={setActive}
          onClose={setInactive}
          onDelete={deleteNote}
          note={note}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    marginTop: 16
  },
  cardFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  footerButton: {
    margin: 0,
    padding: 0,
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  noteCard: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16
  },
  noteText: {
    width: '100%',
    fontSize: 18,
    lineHeight: 24,
    numberOfLines: 2
  }
});
