import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
// import * as md5 from 'md5';
// import * as moment from 'moment';
/*
  Generated class for the ApolloProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const setPassword = gql`
mutation parentPasswordUpdate($input: UpdatePasswordInput!) {
  parentPasswordUpdate(input: $input) {
    msg
    status
  }
}
`;

const setPushToken = gql`
  mutation parentPushTokenCreate($input: CreateParentPushTokenInput!) {
    parentPushTokenCreate(input: $input) {
      msg
      status
    }
  }
`;

const deletePushToken = gql`
mutation parentPushTokenDelete($input: DeleteParentPushTokenInput!) {
  parentPushTokenDelete(input: $input) {
    msg
    status
  }
}
`

const getParent = gql`
query parentGlobalSelect($email: String!) {
  parentGlobalSelect(email: $email) {
    phone
  }
}
`;

const getParentPassenger = gql`
  query parentPassengers($email: String!) {
    parentPassengers(email: $email){
      school_name
      passengers {
        passenger_id
        first_name
        surname
        routeToday {
          j_id
          collection_address {
            time_start
            progress
            address
            latlng
            passenger_log {
              log_type_code
              route_type
              date_time_scan
              address {
                collection
                destination
              }
            }
          }
          destination_address {
            time_end
            progress
            address
            latlng
            passenger_log {
              log_type_code
              route_type
              date_time_scan
              address {
                collection
                destination
              }
            }
          }
          peroid
          date_today
          extra_address {
            movement_order
            latlng
          }
          tracking {
            lat
            lng
            timestamp
            j_id
          }
        }
      }
    }
  }
`;

// const getPassengerRouteToday = gql`
//   query passengerRouteToday($passenger_id: Int!) {
//     passengerRouteToday(passenger_id: $passenger_id) {
//       j_id
//       collection_address {
//         time_start
//         progress
//         address
//         latlng
//         passenger_log {
//           log_type_code
//           route_type
//           date_time_scan
//           address {
//             collection
//             destination
//           }
//         }
//       }
//       destination_address {
//         time_end
//         progress
//         address
//         latlng
//         passenger_log {
//           log_type_code
//           route_type
//           date_time_scan
//           address {
//             collection
//             destination
//           }
//         }
//       }
//       peroid
//       date_today
//       extra_address {
//         movement_order
//         latlng
//       }
//       tracking {
//         lat
//         lng
//         timestamp
//         j_id
//       }
//     }
//   }
// `;

// const watchTracking = gql`
//   query watchTracking($j_id: Int!) {
//     watchTracking(j_id: $j_id) {
//       lat
//       lng
//       timestamp
//       j_id
//     }
//   }
// `;

const schoolContact = gql`
  query schoolContact {
    schoolContact {
      name
      address
      tracking_phone
      tracking_email
    }
  }
`;

const contactOptions = gql`
  query parentContactOptions {
    parentContactOptions {
      accept_email
      accept_notification
    }
  }
`

const updateContactOption = gql`
  mutation parentUpdateContactOption($input: UpdateParentContactOptionInput!) {
    parentUpdateContactOption(input: $input) {
      msg
      status
    }
  }
`


// const PARENT_APP_KEY = md5('parent_voova_' + moment().utc().format('DD-MM-YYYY'))

@Injectable()
export class ApolloProvider {

  constructor(private apollo: Apollo) {
    // console.log('Hello ApolloProvider Provider');
  }

  getParent(email: string) {
    return this.apollo.watchQuery({
      query: getParent,
      variables: {
        email
      },
      fetchPolicy: 'network-only'
    }).valueChanges
  }

  setPassword(email: string, password: string) {
    return this.apollo.mutate({
      mutation: setPassword,
      variables: {
        input: {
          email,
          password
        }
      }
    })
  }

  getParentPassengers(email: string) {
    return this.apollo.watchQuery({
      query: getParentPassenger,
      variables: {
        email
      },
      fetchPolicy: 'network-only'
    }).valueChanges
  }

  // getPassengerRouteToday(passenger_id: number) {
  //   return this.apollo.watchQuery({
  //     query:getPassengerRouteToday ,
  //     variables: {
  //       passenger_id
  //     }
  //   })
  // }

  // trackingVehicle(j_id: number) {
  //   return this.apollo.watchQuery({
  //     query: watchTracking,
  //     pollInterval: 5000,
  //     variables: {
  //       j_id
  //     }
  //   })
  // }

  setPushToken(push_token: string) {
    return this.apollo.mutate({
      mutation: setPushToken,
      variables: {
        input : {
          push_token
        }
      }
    })
  }

  deletePushToken(push_token: string) {
    return this.apollo.mutate({
      mutation: deletePushToken,
      variables: {
        input: {
          push_token
        }
      }
    })
  }

  getSchoolContact() {
    return this.apollo.watchQuery({
      query: schoolContact,
      fetchPolicy: 'network-only'
    }).valueChanges
  }

  getContactOptions() {
    return this.apollo.query({
      query: contactOptions,
      fetchPolicy: 'cache-first'
    })
  }

  updateContactOption(value, key) {
    return this.apollo.mutate({
      mutation: updateContactOption,
      variables: {
        input: {
          key,
          value
        }
      },
      update: (store) => {
        let data = store.readQuery({ query: contactOptions });
        data['parentContactOptions'][key] = value;
        store.writeQuery({ query: contactOptions, data });
      }
    })
  }

}
