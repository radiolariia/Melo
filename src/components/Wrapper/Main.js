import React from "react";
import Carousel from "./Carousel/Carousel/Carousel";
import Recommended from "./Recommended/Recommended";
import {Route, Switch, withRouter} from "react-router-dom";
import Search from "./Search";
import About from "./About/About";


class Main extends React.Component {

        render(){
            return (
            <main>
                <Switch>
                    <Route exact path='/search'>
                        <Search/>
                    </Route>
                    <Route exact path='/'>
                        <Carousel
                            itemData={this.props.products}
                        />
                        <Recommended/>
                    </Route>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/contact'>
                        <Search/>
                    </Route>
                    <Route path='/feedback'>
                        <Search/>
                    </Route>
                    <Route path='/faq'>
                        <Search/>
                    </Route>
                    <Route path='/catalog'>
                        <Search/>
                    </Route>
                    <Route path='/catalog/:artist/:itemId'>
                        <Search/>
                    </Route>

                    {/*<Redirect to='/'/>*/}
                </Switch>
            </main>
        )}
}
export default Main