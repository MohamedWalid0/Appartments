import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
  formContainer: {
    flex: 1,
    width: '60%',
    alignSelf: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    minWidth: 250,
    maxWidth: '100%',
  },
  link: {
    color: 'rgb(4, 92, 150)',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  single: {
    justifyContent: 'center',
    marginTop: '3em',
  },
  button: {
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: 'rgb(8, 100, 219)',
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  successText: {
    color: 'green'
  },
  text: {
    paddingBottom: 7
  },
  buttonText: {
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    fontSize: 30
  }
});

export default styles;
