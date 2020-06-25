function render(blockId) {
    prepareData().then(function () {
        $.getJSON('widgetOptions.json').then(function (widgetOptions) {
            if ('showColumnLines' in settings === false) {
                settings = widgetOptions;
                console.log("use default settings");
            }

            var columns = [];
            resultAnalytData.tableColumns.forEach(function (column, index) {
                if (column.key !== "")
                columns.push({
                    dataField: column.key,
                    caption: column.titleRus
                    //alignment: settings.columnsAlignment
                })
            })

            columns[0].sortBySummaryField = resultAnalytData.tableColumns[4].titleRus;

            console.log(resultAnalytData.tableColumns[4].titleRus);
            console.log(columns[0]);
            console.log(filteredData);
            //console.log(columns);

            var pivotGrid = $(blockId).dxPivotGrid({
                allowFiltering: settings.allowFiltering,
                allowSorting: settings.allowSorting,
                allowSortingBySummary: settings.allowSortingBySummary,
                height: settings.height,
                showBorders: settings.showBorders,
                showColumnGrandTotals: settings.showColumnGrandTotals,
                showRowGrandTotals: settings.showRowGrandTotals,
                showRowTotals: settings.showRowTotals,
                showColumnTotals: settings.showColumnTotals,
                //columns: columns,
                headerFilter: {
                    allowSearch: settings.headerFilterAllowSearch,
                    showRelevantValues: settings.headerFilterShowRelevantValues,
                    width: settings.headerFilterWidth,
                    height: settings.headerFilterHeight
                },
                fieldChooser: {
                    allowSearch: settings.fieldChooserAllowSearch
                },
                fieldPanel: {
                    visible: settings.fieldPanelVisible
                },
                //dataSource: filteredData,
                dataSource: {
                    fields: columns, /*[{
                        caption: "Region",
                        width: 120,
                        dataField: "region",
                        area: "row",
                        sortBySummaryField: "Total"
                    }, {
                        caption: "City",
                        dataField: "city",
                        width: 150,
                        area: "row"
                    }, {
                        dataField: "date",
                        dataType: "date",
                        area: "column"
                    }, {
                        groupName: "date",
                        groupInterval: "month",
                        visible: false
                    }, {
                        caption: "Total",
                        dataField: "amount",
                        dataType: "number",
                        summaryType: "sum",
                        format: "currency",
                        area: "data"
                    }],*/
                    store: filteredData
                },
                allowColumnReordering: settings.allowColumnReordering,
                //showBorders: true,
                grouping: {
                    autoExpandAll: settings.groupingAutoExpandAll
                },
                searchPanel: {
                    visible: settings.searchPanelVisible
                },
                paging: {
                    pageSize: settings.pagingPageSize
                },
                groupPanel: {
                    visible: settings.groupPanelVisible
                },

                /*pager: {
                    showPageSizeSelector: true,
                    allowedPageSizes: widgetPageSize(),
                    showInfo: true
                },*/
                //columns: val.values
                /*columns: [
                    "time",
                    "duration",
                    "IK_hours",
                    "OC_hours",
                    {
                        dataField: "type_ois",
                        groupIndex: 0
                    }
                ]*/
            }).dxPivotGrid("instance");
        });
    });
}