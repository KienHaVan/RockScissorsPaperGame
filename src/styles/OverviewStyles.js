import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {scaleSizeUI} from '../utils/scaleSizeUI';
import {Color} from '../constants';
import FontWeight from '../constants/FontWeight';

const styles = StyleSheet.create({
  TopBar: {
    flex: scaleSizeUI(30, true),
    backgroundColor: Color.primary,
  },
  Content: {
    flex: scaleSizeUI(600, true),
    backgroundColor: Color.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  BottomTab: {
    flex: scaleSizeUI(60, true),
    backgroundColor: Color.white,
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle1: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#A0A4A8',
  },
  textStyle2: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#fff',
  },
  textStyle3: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#a2a0a8',
    textAlign: 'center',
  },
  shadow: {
    shadowColor: Color.black,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  settingIconContent: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
  contentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  contentAvatarIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  contentMember: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 188, 31, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 8,
  },
  contentEditProfile: {
    color: Color.primary,
    fontWeight: FontWeight.Medium,
    fontSize: 14,
  },
  contentIncome: {
    marginTop: 8,
    borderRadius: 16,
    backgroundColor: '#F5F7FE',
    paddingHorizontal: 24,
    paddingVertical: 16,
    height: 100,
  },
  contentOverviewText: {
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Manrope',
    // color: '#52525C',
    lineHeight: 19,
    marginBottom: 8,
  },
  contentOverviewIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  contentCounting: {
    padding: 16,
    backgroundColor: '#F5F7FE',
    borderRadius: 16,
    height: 122,
    paddingBottom: 24,
  },
  contentCountingPercent: {
    height: 16,
    borderRadius: 4,
    backgroundColor: '#E3E7F7',
  },
  contentNotify: {
    padding: 16,
    backgroundColor: Color.black,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 46,
  },
  NotifyIconLeft: {
    width: 40,
    height: 40,
    borderRadius: 1000,
    backgroundColor: '#52525C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  FooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  FooterItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    maxWidth: 100,
  },
});

export default styles;
