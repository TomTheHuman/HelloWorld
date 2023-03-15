import { Card, Text } from '@ui-kitten/components';
import React from 'react';

import { StyleSheet } from 'react-native';

import { View } from '../Themed';

export default function NoNotes (): JSX.Element {
  const messageLine1 = 'There\'s note-ing here...';
  const messageLine2 = 'Tap "New" to add a note!';

  return (
    <View style={styles.container}>
      <Card
        style={styles.card}
        status="info"
      >
        <Text
          style={styles.text}
        >
          {messageLine1}
        </Text>
        <Text style={styles.text}>
          {messageLine2}
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 'auto',
    borderRadius: 8
  },
  text: {
    fontSize: 18,
    lineHeight: 32,
    textAlign: 'center',
    numberOfLines: 1
  }
});
