/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/OverviewStyles';
import {Color, Font} from '../constants';

const Overview = () => {
  return (
    <View style={{flex: 1, backgroundColor: Color.primary}}>
      <View style={styles.TopBar} />
      <View style={styles.Content}>
        <Content />
      </View>
      <View style={styles.BottomTab}>
        <BottomTab></BottomTab>
      </View>
    </View>
  );
};

function Content() {
  return (
    <View style={{flex: 1, padding: 24}}>
      <View>
        <Image
          style={styles.settingIconContent}
          source={require('../assets/images/Setting.png')}
        />
      </View>
      <View style={styles.contentInfo}>
        <View style={{position: 'relative'}}>
          <Image source={require('../assets/images/Avatar.png')} />
          <Image
            source={require('../assets/images/photo.png')}
            style={styles.contentAvatarIcon}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={Font.heading4}>Daniel Travis</Text>
          <View style={styles.contentMember}>
            <Text style={{color: Color.warning, marginRight: 4}}>
              Member Gold
            </Text>
            <Image source={require('../assets/images/ranking.png')} />
          </View>
        </View>
        <View>
          <Text
            style={[
              styles.textStyle1,
              {color: Color.primary, fontWeight: '700'},
            ]}>
            Edit Profile
          </Text>
        </View>
      </View>
      <View style={{marginBottom: 16}}>
        <Text style={Font.heading6}>Overview</Text>
        <View style={styles.flexRowCenter}>
          <View style={[styles.contentIncome, styles.shadow]}>
            <Text style={styles.contentOverviewText}>Net Income</Text>
            <View style={styles.flexRowCenter}>
              <View style={styles.contentOverviewIcon}>
                <Image
                  source={require('../assets/images/Income.png')}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <Text style={Font.heading3}>$4,500</Text>
            </View>
          </View>
          <View style={styles.contentIncome}>
            <Text style={styles.contentOverviewText}>Expense</Text>
            <View style={styles.flexRowCenter}>
              <View style={styles.contentOverviewIcon}>
                <Image
                  source={require('../assets/images/Outcome.png')}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <Text style={Font.heading3}>$1,691</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contentCounting}>
        <Text
          style={[
            styles.contentOverviewText,
            {marginBottom: 14, color: Color.black},
          ]}>
          Spend this week
        </Text>
        <View style={[styles.flexRowCenter, {marginBottom: 12}]}>
          <View
            style={[
              styles.contentCountingPercent,
              {backgroundColor: '#e3e7f7', flex: 1, marginRight: 16},
            ]}>
            <View
              style={[
                styles.contentCountingPercent,
                {backgroundColor: Color.primary, width: 122},
              ]}></View>
          </View>
          <Text style={Font.heading5}>$124</Text>
        </View>
        <Text style={styles.textStyle1}>$124 left to spend</Text>
      </View>
      <View style={styles.contentNotify}>
        <View style={styles.NotifyIconLeft}>
          <Image
            source={require('../assets/images/Chat.png')}
            style={styles.iconStyle}></Image>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.textStyle2}>Got any questions for Finpay?</Text>
          <Text style={styles.textStyle2}>Our CS are ready 24/7 to help!</Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/ArrowRight.png')}
            style={styles.iconStyle}></Image>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <Text style={styles.textStyle3}>
          You joined Finpay on September 2021. It’s been 1 month since then and
          our mission is still the same, help you better manage your finance.
        </Text>
      </View>
    </View>
  );
}

function BottomTab() {
  return (
    <View style={styles.FooterContainer}>
      <View style={styles.FooterItem}>
        <Image
          source={require('../assets/images/Home.png')}
          style={styles.iconStyle}></Image>
        <Text style={[styles.textStyle2, {color: '#acbbf3'}]}>Home</Text>
      </View>
      <View style={styles.FooterItem}>
        <Image
          source={require('../assets/images/chart.png')}
          style={styles.iconStyle}></Image>
        <Text style={[styles.textStyle2, {color: '#acbbf3'}]}>Statistics</Text>
      </View>
      <View style={styles.FooterItem}>
        <Image
          source={require('../assets/images/Iconqr.png')}
          style={[styles.iconStyle, {tintColor: Color.primary}]}></Image>
        <Text style={[styles.textStyle2, {color: '#acbbf3'}]}>Scan</Text>
      </View>
      <View style={styles.FooterItem}>
        <Image
          source={require('../assets/images/cardFooter.png')}
          style={styles.iconStyle}></Image>
        <Text style={[styles.textStyle2, {color: '#acbbf3'}]}>Cards</Text>
      </View>
      <View style={styles.FooterItem}>
        <Image
          source={require('../assets/images/User.png')}
          style={styles.iconStyle}></Image>
        <Text style={[styles.textStyle2, {color: '#acbbf3'}]}>Profile</Text>
      </View>
    </View>
  );
}

export default Overview;
