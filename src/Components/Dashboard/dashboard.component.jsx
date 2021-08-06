import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <form>
                    <table>
                        <tr>
                            <td>First Name</td>
                            <td><input type="text" className="text" id="firstNme" /></td>
                            <td>Last Name</td>
                            <td><input type="text" className="text" id="lastName" /></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}

export default Dashboard;