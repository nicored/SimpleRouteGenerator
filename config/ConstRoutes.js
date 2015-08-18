const GET = {
    activity: {
        dev_url: '/activity/{activity_id}',
        symfo_path: 'wfm_ajax_activity'
    },
    group: {
        dev_url: '/group/{group_id}',
        symfo_path: 'wfm_ajax_group'
    },
    group_activities: {
        dev_url: '/group/{group_id}/activities',
        symfo_path: 'wfm_ajax_group_activities'
    },
    groups: {
        dev_url: '/form/{form_id}/groups',
        symfo_path: 'wfm_ajax_groups'
    }
};

const POST = {
    create_form: {
        dev_url: '/form/create',
        symfo_path: 'wfm_ajax_form_create'
    },
    edit_form: {
        dev_url: '/form/{form_id}/edit',
        symfo_path: 'wfm_ajax_form_edit'
    },
    create_group: {
        dev_url: '/group/{group_id}/create',
        symfo_path: 'wfm_ajax_group_create'
    },
    edit_group: {
        dev_url: '/group/{group_id}/edit',
        symfo_path: 'wfm_ajax_group_edit'
    },
    create_activity: {
        dev_url: '/group/{group_id}/activity/create',
        symfo_path: 'wfm_ajax_activity_create'
    }
};

export {GET, POST};
