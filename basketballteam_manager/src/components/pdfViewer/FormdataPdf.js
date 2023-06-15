import React from 'react'
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    table: {
        display: "table",
        margin: '10px',
        border: '1px solid black'
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCell: {
        width: "25%",
        border: '1px solid black',
        padding: 5
    }
});

function FormdataPdf(props) {
    const { formArray } = props;
    console.log('pdf data', formArray);
    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                <Page>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>FirstName</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>LastName</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Height</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Position</Text>
                            </View>
                        </View>
                        {formArray.map((item, index) => (
                            <View key={index} style={styles.tableRow}>
                                <View style={styles.tableCell}>
                                    <Text>{item.FirstName}</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text>{item.LastName}</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text>{item.Height}</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text>{item.Position}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </Page>
            </Document>
        </PDFViewer>

    );
}

export default FormdataPdf
