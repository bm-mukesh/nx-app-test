/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
//DATA TABLE
import DataTable, { TableColumn } from 'react-data-table-component';
import FilterComponent from '../../app/FilterComponent';
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
//REDUX
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/action-creators/index";
import * as InstituteActionCreators from "../../state/inst/instituteAc";
import { RootState } from "../../state";
import InstituteDetails from '../../screen/home/instituteDetails';

interface DataRow {
    _id: number;
    isActive: boolean;
    isInhouse: boolean;
    instituteName: string;
    instituteDomain: string;
}
export function Institutes() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { getInstitute, addInstitute } = bindActionCreators(InstituteActionCreators, dispatch);

    //GET STATE FROM STORE
    const instState = useSelector((state: RootState) => state.institute.data);
     //EDIT ROW POPUP
    const [editRowPopUp, setEditRowPopUp] = useState(false);
    const [viewInstitute, setViewInstitute] = useState({});

    //HANDLE ROW EDIT BUTTON 
    const handleButtonClick = (e: any, row: any) => {
        e.preventDefault();
        console.log("Edit button Clicked======> Row Id", row);
        setEditRowPopUp(true);
    };

    //HANDLE ROW VIEW DETAIL BUTTON 
    const handleViewButtonClick = (e: any, row: any) => {
        e.preventDefault();
        console.log("View button Clicked======> Row Id", row);
        setViewInstitute(row);
        navigate(`/institute/${row._id}`);
    };

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'ID',
            selector: row => row._id,
        },
        {
            name: 'Institute Name',
            selector: row => row.instituteName,
        },
        {
            name: 'Institute Domain',
            selector: row => row.instituteDomain,
        },
        {
            name: 'Is Active',
            selector: row => {
                if (row.isActive) {
                    return "Yes"
                } else {
                    return "No"
                }
                // return row.isActive
            },
        },
        {
            name: 'Is Inhouse',
            selector: row => {
                if (row.isInhouse) {
                    return "Yes"
                } else {
                    return "No"
                }
                // return row.isActive
            },
        },
        {
            name: 'Action',
            button: true,
            cell: (row) => (
                <button
                    className="btn btn-outline btn-xs"
                    onClick={(e) => handleButtonClick(e, row)}
                >
                    Edit
                </button>
            ),
        },
        {
            name: 'View',
            button: true,
            cell: (row) => (
                <button
                    className="btn btn-outline btn-xs"
                    onClick={(e) => handleViewButtonClick(e, row)}
                >
                    View Details
                </button>
            ),
        }
    ];
    
    const rowSelectCritera = (row: any) => row.isActive;
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent
                onFilter={(e) => setFilterText(e)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);
    
    console.log("Page==============Institute");
    
    useEffect(() => {
       getInstitute(0)
    },[]);
    return (
        <div>
            <button onClick={() => getInstitute(0)}>GET INSTITUTE DATA</button>
            {instState ?
                <DataTable
                    columns={columns}
                    data={instState}
                    pagination
                    fixedHeader={true}
                    fixedHeaderScrollHeight='500px'
                    selectableRows
                    selectableRowSelected={rowSelectCritera}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                />
                : <p>No data found</p>
            }
        </div>
    )
}
export default Institutes