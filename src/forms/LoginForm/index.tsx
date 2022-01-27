import {Formik} from 'formik';
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants';
import {H5, H6} from '../../ui/Typography';
import {LoginFormProps} from '../PropTypes';
import {loginSchema} from '../schemas';
import {styles} from './styles';

export const LoginForm: React.FC<LoginFormProps> = ({onSubmit}) => {
  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={values => onSubmit(values)}>
      {({handleChange, handleSubmit, values, touched, errors}) => (
        <View style={styles.container}>
          <View>
            <TextInput
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
              style={styles.textInput}
            />
            <Icon
              name="mail"
              size={25}
              style={styles.leftIcon}
              color={colors.lightGray}
            />
          </View>
          {errors.email && touched.email && (
            <H6 style={styles.error}>{errors.email}</H6>
          )}
          <View>
            <TextInput
              secureTextEntry
              placeholder="Password"
              onChangeText={handleChange('password')}
              value={values.password}
              style={styles.textInput}
            />
            <Icon
              name="lock-closed"
              size={25}
              style={styles.leftIcon}
              color={colors.lightGray}
            />
          </View>
          {errors.password && touched.password && (
            <H6 style={styles.error}>{errors.password}</H6>
          )}
          <TouchableOpacity
            onPress={handleSubmit}
            activeOpacity={0.7}
            style={styles.button}>
            <H5 style={styles.buttonText}>Log in</H5>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
