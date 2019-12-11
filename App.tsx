import React, {useState} from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

import CardHorizontal from './src/components/CardHorizontal/CardHorizontal';
import {ThemeProvider} from 'styled-components';
import {themeVariables} from './src/theme/themeVariables';
import {buildTheme} from './src/theme/CustomComponentsTheme';

//file themes
const defaultTheme = buildTheme(themeVariables);
const altTheme = buildTheme({...themeVariables, colors: {...themeVariables.colors, primary: '#ff0'}});
const themes = [defaultTheme, altTheme];

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex];
  console.log({theme, themeIndex});
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Header />
          {!usingHermes ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <CardHorizontal
              border="round"
              imageBorder="round"
              bg="primary"
              timeToRead="4 min"
              title="Título da notícia"
              date="ontem"
              publisherImageSource={{uri: 'https://picsum.photos/id/137/200/300'}}
              newsImageSource={{uri: 'https://picsum.photos/id/237/200/300'}}
            />
            <Button title="Change theme" onPress={() => (themeIndex === 0 ? setThemeIndex(1) : setThemeIndex(0))} />
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
