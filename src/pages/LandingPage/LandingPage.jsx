import {  Button as MuiButton  } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import VueRenderer from '../../components/VueRenderer/VueRenderer';
import ClickCounter from 'vueApp/ClickCounter'

export default function LandingPage() {

  return (
    <Layout>
        <h1> Welcome to this Microfrontends POC</h1>
        <h2> The new and improved home for apps, within a micro frontend</h2>
        <div>This space is waiting to be filled with your application, let's go!</div>
        <div>
            <MuiButton variant='outlined' component={Link} to="/imports/details" >
              Import details
            </MuiButton>
            <VueRenderer component={ClickCounter}/>
        </div>
    </Layout>
  );
}