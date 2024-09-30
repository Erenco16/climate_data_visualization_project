import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const PowerBIReport: React.FC = () => {
    const embedConfig = {
        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
        id: 'fc2c4aab-5572-4b75-bd66-41d2c905f0ba',
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=fc2c4aab-5572-4b75-bd66-41d2c905f0ba&groupId=caa3de24-afde-47a4-b310-828066d88e6e&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyIsImtpZCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvODU2MDI5MDgtZTE1Yi00M2JhLTkxNDgtMzhiYzc3M2E4MTZlLyIsImlhdCI6MTcyNzYzMzQ5MiwibmJmIjoxNzI3NjMzNDkyLCJleHAiOjE3Mjc2Mzg2MTUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WUFBQUFSR253bXA3SGhJQUdySGFLeXREYmd4NEJSdW5xQlRicnpnYnptQitBYkFEZ0lmUDVMY0c0amdlNUVwUzdEaTV4IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiQkHFnkFSQU4iLCJnaXZlbl9uYW1lIjoiRVJFTiIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjIwMDE6NzcwOjUwOjQyZWQ6NWNlOTo0NzM4OjM1MGQ6ODdiZSIsIm5hbWUiOiJFUkVOIEJBxZ5BUkFOIiwib2lkIjoiODExNjVkOGUtMTY4ZS00OWI2LTkzZTktNWQzMGIwYzlkZWUwIiwicHVpZCI6IjEwMDMyMDAwREQ5MTlGMkUiLCJyaCI6IjAuQVNzQUNDbGdoVnZodWtPUlNEaThkenFCYmdrQUFBQUFBQUFBd0FBQUFBQUFBQUFyQUpzLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlgwZzZsdnlYZWl1MXRRT0s3VmFPZGlyNUtBa1FWYlZ1V2pwUlQ5dW13bkEiLCJ0aWQiOiI4NTYwMjkwOC1lMTViLTQzYmEtOTE0OC0zOGJjNzczYTgxNmUiLCJ1bmlxdWVfbmFtZSI6ImVyZW4uYmFzYXJhbjFAc3RkLnlpbGRpei5lZHUudHIiLCJ1cG4iOiJlcmVuLmJhc2FyYW4xQHN0ZC55aWxkaXouZWR1LnRyIiwidXRpIjoidlBlQ3hmY0VkVVNYSzNJU0h2dFRBUSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMTQiLCJ4bXNfcGwiOiJlbi1HQiJ9.GD-RD7uHm1lDNRacHK2L0vVLUC4RMzZO3FEgq_HH4LEAP-haNIBCAzEYddu48dg9tB2KLYyf12DUVJwyEYq5Z5-gc5XoeL6Aw8hzm9F2XUljJ7DQf3Pp6Cl-W_jiU2LW0FGP-tLn50CBDST9vRk7W7WkqDAd4LDbNncdUXamQqnc1kt-RJtcYFnEN4l-R8c9aGKGAPHYPMi8ArhwQLeXoBX5ggpLKtc0hpHwWJ1VhwV2ys38YQyvrfRpKCj4EmPVRAvGSTdIDsqzi1bSaNjzGxn_wtrLwR_M-_d-hXEOQ-a1VYIHercwCbT6G2s-hCMANjdUTn-54z9byMBFmBlVxQ',
        tokenType: models.TokenType.Aad,
        settings: {
            panes: {
                filters: {
                    visible: false
                },
                pageNavigation: {
                    visible: false
                }
            }
        }
    };

    return (
        <div style={{ height: '100vh' }}>
            <PowerBIEmbed
                embedConfig={embedConfig}
                cssClassName="embedded-report"
                getEmbeddedComponent={(embeddedReport) => {
                    console.log('Embedded Report:', embeddedReport);
                }}
            />
        </div>
    );
};

export default PowerBIReport;
