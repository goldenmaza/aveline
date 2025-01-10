export default function OfficeSummary(props) {
    const { regionalOffices, officeEmployees } = props;

    return (
        <>
            {regionalOffices.length > 0 &&
                <div className='contact_tree'>
                    <ul id='regionalOffices'>
                        { regionalOffices }
                    </ul>
                    <ul id='officeEmployees'>
                        { officeEmployees }
                    </ul>
                </div>
            }
        </>
    );
}
