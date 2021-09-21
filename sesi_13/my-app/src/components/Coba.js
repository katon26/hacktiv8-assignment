import React from "react";

export default class Coba extends React.Component {
    state = {
        barang: 0,
        min_barang: 0,
        max_barang: 99
    }

    addItem = ( ) => {
        this.setState({
            barang: this.state.barang + 1
        })
    }

    deleteItem = ( ) => {
        if ( this.state.barang === 0) {
            alert("Tidak ada barang yang dapat dihapus")
        } else {
            this.setState({
                barang: this.state.barang - 1
            })
        }
    }

    render() {
        const {barang} = this.state;
        return (
            <div>
                <h3>kamu memiliki {barang} barang</h3>
                <button onClick={this.addItem}>+</button>
                <button onClick={this.deleteItem}>-</button>
            </div>
        )
    }
}
