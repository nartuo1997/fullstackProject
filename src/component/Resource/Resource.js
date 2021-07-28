// material ui CSS
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


import React, { Component } from 'react';
import { connect } from 'react-redux';

//import file
import { getResource } from '../../service/getAPI/getResourceAction';


// import CSS
import './Resource.css'
import { useEffect } from 'react';




const Resource = (props) => {
    const columns = [
        // { id: 'catalog', label: 'Resource Catalog', minWidth: 200 },
        { id: 'resource_name', label: 'RESOURCE NAME' },
        { id: 'code', label: 'RESOURCE CODE' },

    ];

    function createData(resource_name, code) {
        return { resource_name, code };
    }
    // console.log(props.resource.resource[0].resource_id)

    // const rows = []
    // rows.push(props.resource.resource.map(data => {
    //     // console.log(data.resource_name, data.code)
    //     createData(data.resource_name, data.code)
    // }))

    // props.resource.resource.map(data => {
    //     console.log(data.resource_name, data.code)
    //     createData(data.resource_name, data.code)
    // }    

    // createData('Procurement and Contracting Requirements', 1001),
    // createData('Existing Conditions', 1002),
    // createData('Masonry', 1003),
    // createData('Finishes', 1004),



    const useStyles = makeStyles({
        root: {
            width: '70%',
        },
        container: {
            maxHeight: 440,
        },
    });


    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const { dispatch } = props;

    useEffect(() => {
        getResource()(dispatch);

    }, [])

    const createCells = () => {
        let temp = props.resource.resource.map(data => {
            console.log(data.resource_name);
            return (
                <tr>
                    <td>{data.resource_name}</td>
                    <td>{data.code}</td>
                </tr>

            )
        })
        return temp;
    };

    // })




    return (


        <div div className="container" >
            <table className="customers">

                <tr>
                    <th>RESOURCE NAME</th>
                    <th>PROJECT CODE</th>

                </tr>
                {createCells()}



                {/* <tr> */}
                {/* <td>{props.resource.resource[0].resource_name}</td>
                    <td>{props.resource.resource[0].code}</td> */}
                {/* <td>hello</td> */}
                {/* <td>hello</td> */}
                {/* </tr> */}
            </table>

            {/* <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell key="catalog" minwidth='100'>Resource Catalog</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper> */}


            {/* ----------------------------------- */}


            {/* <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell key="catalog" minwidth='100'>Project</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper> */}

            {/* <table className="ui fixed table">
                    <thead>
                        <tr>
                            <th></th>
                            <th style={{ textAlign: "center" }}>Resource Catalog</th>
                            <th></th>
                        </tr>

                    </thead>
                    <thead>
                        <tr><th style={{ textAlign: "center" }}>RESOURCE NAME</th>
                            <th></th>
                            <th style={{ textAlign: "center" }}>RESOURCE CODE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >John</td>
                            <td></td>
                            <td>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</td>
                        </tr>
                        <tr>
                            <td>Jamie</td>
                            <td></td>
                            <td>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</td>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td></td>
                            <td>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</td>
                        </tr>
                    </tbody>
                </table> */}
        </div >
    )
};


const mapStateToProps = (state) => {
    // console.log("state from resource:", state.resource)


    return {
        resource: state.resource
    }
}


export default connect(mapStateToProps)(Resource);

