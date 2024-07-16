var dd = {
    content: [
        	{text: 'Notas dos alunos do 2º ano do ensino fundamental', style: 'header'},
        	{
            table: {
                headerRows: 1,
                widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                body: [
                    [
                        { text: 'Aluno', bold: true, fillColor: '#9BC2E6' },
                        { text: 'Matemática', bold: true, fillColor: '#9BC2E6' },
                        { text: 'Português', bold: true, fillColor: '#9BC2E6' }, 
                        { text: 'História', bold: true, fillColor: '#9BC2E6' }, 
                        { text: 'Geografia', bold: true, fillColor: '#9BC2E6' },
                        { text: 'Ciências', bold: true, fillColor: '#9BC2E6' },
                    ],
                    [{ text: 'Alice', bold: true }, '7,5', '8,9', '8', '8,2', '10'],
                    [{ text: 'Pedro', bold: true }, '8,5', '8', '8,5', '9', '10'],
                    [{ text: 'Ricardo', bold: true }, '7', '7,9', '8', '8', '9,5'],
                    [{ text: 'Bianca', bold: true }, '9', '8,7', '8,5', {colSpan: 2, text: ''}, ''],
                ]
            }
        }
    ],
    	styles: {
		header: {
			bold: true,
			color: '#072A6A',
			margin: [40, 0, 0, 10],
		},
	}
 
};
