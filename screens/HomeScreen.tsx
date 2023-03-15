import { Button } from '@ui-kitten/components';
import React, { useState, useEffect } from 'react';

import { StyleSheet } from 'react-native';
import { PlusCircle } from 'react-native-unicons';
import { useRecoilState, useRecoilValue } from 'recoil';
import NoNotes from '../components/home/NoNotes';
import NewNote from '../components/home/NewNote';

import { Text, View } from '../components/Themed';
import { INote, notesCountState, notesState } from '../state/Notes';
import { RootTabScreenProps } from '../types';
import NotesList from '../components/home/NotesList';

export default function HomeScreen ({ navigation }: RootTabScreenProps<'Home'>): JSX.Element {
  const [newOpen, setNewOpen] = useState<boolean>(false);
  const notesCount = useRecoilValue(notesCountState);
  const [notes, setNotes] = useRecoilState(notesState);

  const addIcon = (props: any): JSX.Element => {
    const { tintColor } = props.style;
    return <PlusCircle color={tintColor} />;
  };

  const closeNewNote = (): void => {
    setNewOpen(false);
  };

  const addNote = (note: INote): void => {
    setNotes((oldNotes) => [...oldNotes, note]);
  };

  const renderNewNote = (): JSX.Element | null => {
    if (newOpen) {
      return <NewNote close={closeNewNote} add={addNote} />;
    }
    return null;
  };

  const renderNoNotesMessage = (): JSX.Element | null => {
    if (!newOpen && notesCount === 0) {
      return <NoNotes />;
    }
    return null;
  };

  const renderNotesList = (): JSX.Element | null => {
    if (!newOpen && notesCount > 0) {
      return <NotesList />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{`Notes (${notesCount})`}</Text>
        <Button
          status="info"
          size="small"
          appearance="outline"
          style={styles.addButton}
          accessoryRight={addIcon}
          disabled={newOpen}
          onPress={() => { setNewOpen(true); }}
        >
          New
        </Button>
      </View>
      <View style={styles.content}>
        {renderNewNote()}
        {renderNoNotesMessage()}
        {renderNotesList()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 16
  },
  header: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexGrow: 0,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 16
  },
  addButton: {
    width: 'auto',
    fontSize: 48,
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%'
  }
});
