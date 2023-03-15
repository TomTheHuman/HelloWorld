import { Button } from '@ui-kitten/components';
import React, { useState } from 'react';

import { Pressable, StyleSheet, TextInput } from 'react-native';
import { Check, Times } from 'react-native-unicons';
import { INote } from '../../state/Notes';

import { View } from '../Themed';

export default function NewNote (props: any): JSX.Element {
  const { close, add } = props;
  const [input, setInput] = useState<string>('');
  const [colorIndex, setColorIndex] = useState<number>(0);
  const colors = ['#FFC9BF', '#FFE1BF', '#FFFDBF', '#D9FFBF', '#BFF8FF', '#DABFFF', '#D1D1D1'];

  const closeIcon = (btnProps: any): JSX.Element => {
    const { tintColor } = btnProps.style;
    return <Times color={tintColor} />;
  };

  const colorChoice = (index: number): JSX.Element => (
    <Pressable
      key={index}
      style={[
        styles.colorChoice,
        {
          backgroundColor: colors[index]
        }
      ]}
      onPress={() => { setColorIndex(index); }}
    >
      {colorIndex === index && <Check color="#606060" />}
    </Pressable>
  );

  const handleAdd = (): void => {
    const noteData: INote = {
      value: input,
      color: colors[colorIndex],
      created: new Date().toDateString(),
      modified: new Date().toDateString()
    };

    add(noteData);
    setColorIndex(0);
    setInput('');
    close();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.colorPicker}>
          {colors.map((_, index) => (
            colorChoice(index)
          ))}
        </View>
        <Button
          appearance="ghost"
          status="basic"
          accessoryLeft={closeIcon}
          onPress={() => close()}
        />
      </View>
      <View
        style={[
          styles.newNote,
          { backgroundColor: colors[colorIndex] }
        ]}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.inputField}
          placeholder="Start a new note..."
        />
      </View>
      <View style={styles.footer}>
        <Button
          status="info"
          size="small"
          appearance="outline"
          style={styles.addButton}
          disabled={input.length === 0}
          onPress={() => { handleAdd(); }}
        >
          Add Note
        </Button>
      </View>
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 8
  },
  radioGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  radioButton: {
    marginRight: 8
  },
  colorPicker: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  colorChoice: {
    width: 32,
    height: 32,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  newNote: {
    width: '100%',
    padding: 16,
    borderRadius: 8
  },
  inputField: {
    width: '100%'
  },
  text: {
    fontSize: 18,
    lineHeight: 32,
    textAlign: 'center',
    numberOfLines: 1
  },
  footer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: 16
  },
  addButton: {
    width: 100
  }
});
