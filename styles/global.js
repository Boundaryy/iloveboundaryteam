import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    width:"100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logincontainer: {
    width:"100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom:20,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    fontSize: 14,
    color: '#808080',
  },
  header: {
    position: "absolute",
    top: "50px",
    left: "50px",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5772FF',
  },
  subtitle: {
    fontSize: 28,
    whiteSpace:"nowrap",
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    color: '#898989',
    marginBottom: 20,
  },
  formGroup: {
    width: "75%",
    height:"11.5%",
  },
  backText: {
    fontSize: 18,
    color: '#808080',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
  },
  input: {
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#5772FF',
      fontSize: 18,
      color: '#5772FF',
  },
});