import { Component } from "react"
import consts from './consts'
import Link from 'next/link'
import { CometChatUI } from "../pages/cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/index"

export default class CometChatNoSSR extends Component {
    constructor(props) {
      super(props)
      this.state = {
        user: undefined
      }
    }
    componentDidMount() {
      /**
      Initialize CometChat
      */
      let appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForFriends().setRegion(consts.REGION).build()
      
      CometChat.init(consts.APP_ID, appSetting).then(
        () => {
          /**
          *Log in user
          */
         const getUser = JSON.parse(localStorage.getItem('user'))
          const UID = getUser.uid
          const authKey = consts.AUTH_KEY
          CometChat.login(UID, authKey).then(
            user => {
              this.setState({ user })
            },
            error => {
              console.log("Login failed with exception:", {
                error
              })
            }
          )
        },
        error => {
          console.log("Initialization failed with error:", error)
          // Check the reason for error and take appropriate action.
        }
      )
    }
    render() {
        /**
        Rendering CometChatUI  component of React UIKit
        **/
        if (this.state.user) {
            return (
              <div style={{ width: "100vw", height: "100vh" }}>
                <link
                  rel="stylesheet"
                  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                  crossOrigin="anonymous"
                />
                  
                <CometChatUI />

                <Link href="add-friend" passHref>
                  <button className="add-button">
                    <i className="fas fa-plus"></i>
                  </button>
                </Link>
              </div>
            )
        } else {
            return (<div>Laoding...</div>)
        }
    }
}