import React from 'react';
import {Text,View,TextInput,StyleSheet,Button} from 'react-native'
import { Field, reduxForm } from 'redux-form';

const customInput = ({input: {onChange, ...restInput}}) => {
    return <TextInput style={styles.field} onChangeText={onChange}{...restInput}/>
}

const minLength = min => value => 
    value&&value.length<min? `Must be ${min} characters ot more`: undefined

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
      <View style={styles.view}>
        <Text style={styles.title}>Form</Text>
        <View style={styles.container}>
            <Text>Username</Text>
            <Field
                style={styles.field}
                name="username"
                component={customInput} 
                validate={[minLength(8)]}      
                ></Field>
        </View>
        <View style={styles.container}>
            <Text>Sex</Text>
            <Field
                style={styles.field}
                name="sex"
                component={customInput}       
                ></Field>
        </View>
        <View style={styles.container}>
            <Text>Email</Text>
            <Field
                style={styles.field}
                name="email"
                component={customInput}       
                ></Field>
        </View>
        <View style={styles.buttonView}>
            <Button title='Cancel' onPress={()=>{}}/>
            <Button title='Submit' onPress={()=>{}}/>
        </View>
        

        
      </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    //   width:200,
    },
    field: {
        width:200,
    },
    view:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'flex-end'
    },
    title:{
        alignSelf: 'flex-start'
    },
    buttonView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width:200,
    }
    
  });

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
